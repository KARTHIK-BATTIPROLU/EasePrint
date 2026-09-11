import math
from typing import Dict, Any, Optional
from pydantic import BaseModel, Field


class PricingBreakdown(BaseModel):
    pages: int = Field(..., description="Total pages per document")
    copies: int = Field(1, description="Number of copies")
    color_mode: str = Field("bw", description="color or bw")
    sides: str = Field("single", description="single or double")
    paper_type: str = Field("standard", description="standard or glossy")
    binding: str = Field("none", description="none, staple, spiral, soft, hard")
    sheets_per_copy: int = Field(..., description="Physical sheets required per copy")
    rate_per_unit: float = Field(..., description="Cost per page or per sheet")
    print_cost: float = Field(..., description="Subtotal for printing across all copies")
    binding_cost: float = Field(0.0, description="Subtotal for binding across all copies")
    total_amount_inr: float = Field(..., description="Grand total in Indian Rupees (INR)")
    summary: str = Field(..., description="Human-readable pricing explanation")


def calculate_hyderabad_price(
    pages: int,
    copies: int = 1,
    color_mode: str = "bw",
    sides: str = "single",
    binding: str = "none",
    paper_type: str = "standard",
    custom_rates: Optional[Dict[str, float]] = None,
) -> PricingBreakdown:
    """
    Calculate print and finishing costs using Hyderabad campus Xerox rates (with custom rate overrides).
    """
    if pages < 1:
        pages = 1
    if copies < 1:
        copies = 1

    color_mode = color_mode.lower().strip()
    sides = sides.lower().strip()
    binding = binding.lower().strip()
    paper_type = paper_type.lower().strip()

    rates = {
        "bw_single": 2.0,
        "bw_duplex": 3.0,
        "color_standard": 10.0,
        "color_glossy": 15.0,
        "spiral_binding": 30.0,
        "soft_binding": 50.0,
        "hard_binding": 180.0,
        "corner_staple": 0.0,
    }
    if custom_rates:
        rates.update(custom_rates)

    # Determine sheets and print rate
    if sides in ["double", "duplex", "two-sided", "both"]:
        sheets = math.ceil(pages / 2)
        if color_mode == "color":
            rate = rates["color_standard"] * 1.8 if paper_type != "glossy" else rates["color_glossy"] * 1.8
            print_cost_per_copy = sheets * rate
        else:
            rate = rates["bw_duplex"]
            print_cost_per_copy = sheets * rate
    else:
        # Single-sided
        sheets = pages
        if color_mode == "color":
            rate = rates["color_standard"] if paper_type != "glossy" else rates["color_glossy"]
            print_cost_per_copy = pages * rate
        else:
            rate = rates["bw_single"]
            print_cost_per_copy = pages * rate

    total_print_cost = print_cost_per_copy * copies

    # Determine binding cost
    if binding == "spiral":
        extra_hundreds = max(0, math.ceil((pages - 100) / 100))
        binding_per_copy = rates["spiral_binding"] + (extra_hundreds * 10.0)
    elif binding == "soft":
        binding_per_copy = rates["soft_binding"]
    elif binding in ["hard", "thesis", "project"]:
        binding_per_copy = rates["hard_binding"]
    else:
        binding_per_copy = 0.0

    total_binding_cost = binding_per_copy * copies
    grand_total = total_print_cost + total_binding_cost

    # Human-readable summary
    summary_parts = [
        f"{pages} page(s)",
        f"{'Color' if color_mode == 'color' else 'B&W'}",
        f"{'Double-sided' if 'double' in sides else 'Single-sided'}",
        f"x {copies} cop{'y' if copies == 1 else 'ies'}",
        f"= ₹{total_print_cost:.2f}",
    ]
    if total_binding_cost > 0:
        summary_parts.append(f"+ ₹{total_binding_cost:.2f} ({binding.capitalize()} Binding)")
    summary_parts.append(f"-> Total: ₹{grand_total:.2f}")

    return PricingBreakdown(
        pages=pages,
        copies=copies,
        color_mode=color_mode,
        sides=sides,
        paper_type=paper_type,
        binding=binding,
        sheets_per_copy=sheets,
        rate_per_unit=rate,
        print_cost=total_print_cost,
        binding_cost=total_binding_cost,
        total_amount_inr=grand_total,
        summary=" ".join(summary_parts),
    )
