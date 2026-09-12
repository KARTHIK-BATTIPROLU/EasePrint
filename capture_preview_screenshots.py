import os
import time
from playwright.sync_api import sync_playwright

def capture_screenshots():
    output_dir = os.path.abspath("preview_screenshots")
    os.makedirs(output_dir, exist_ok=True)
    
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        
        # 1. Desktop Standard Viewport (1440 x 900)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto("http://localhost:3000/preview", wait_until="networkidle")
        time.sleep(1.5)
        
        # 1. Hero & Brand Overview
        page.screenshot(path=os.path.join(output_dir, "01_desktop_hero_overview.png"))
        print("Captured 01_desktop_hero_overview.png")
        
        # 2. Hardware Telemetry & 3D Print Cloud
        page.locator("#printer-visual").scroll_into_view_if_needed()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "02_desktop_printer_and_telemetry.png"))
        print("Captured 02_desktop_printer_and_telemetry.png")
        
        # 3. Student 3-Column Cockpit
        page.locator("#student-cockpit").scroll_into_view_if_needed()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "03_desktop_student_cockpit.png"))
        print("Captured 03_desktop_student_cockpit.png")
        
        # 4. Staff Queue & Command
        page.locator("#staff-queue").scroll_into_view_if_needed()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "04_desktop_staff_queue.png"))
        print("Captured 04_desktop_staff_queue.png")
        
        # 5. State Matrix: Hover & Focus
        page.locator("#state-matrix").scroll_into_view_if_needed()
        time.sleep(0.5)
        page.get_by_role("button", name="Hover & Focus States").click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "05_state_hover_focus.png"))
        print("Captured 05_state_hover_focus.png")
        
        # 6. State Matrix: Loading State
        page.get_by_role("button", name="Loading State").click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "06_state_loading.png"))
        print("Captured 06_state_loading.png")
        
        # 7. State Matrix: Empty State
        page.get_by_role("button", name="Empty State").click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "07_state_empty.png"))
        print("Captured 07_state_empty.png")
        
        # 8. State Matrix: Error State
        page.get_by_role("button", name="Error State").click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "08_state_error.png"))
        print("Captured 08_state_error.png")
        
        # 9. State Matrix: Success State
        page.get_by_role("button", name="Success State").click()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "09_state_success.png"))
        print("Captured 09_state_success.png")
        
        # 10. Design Tokens & Governance
        page.locator("#token-specs").scroll_into_view_if_needed()
        time.sleep(0.5)
        page.screenshot(path=os.path.join(output_dir, "10_design_token_specs.png"))
        print("Captured 10_design_token_specs.png")
        
        # 11. Full Page Scroll Capture
        page.screenshot(path=os.path.join(output_dir, "11_full_page_desktop.png"), full_page=True)
        print("Captured 11_full_page_desktop.png")
        
        # 12. Mobile Viewport (iPhone 14 standard 390x844)
        mobile_page = browser.new_page(
            viewport={"width": 390, "height": 844},
            is_mobile=True,
            has_touch=True
        )
        mobile_page.goto("http://localhost:3000/preview", wait_until="networkidle")
        time.sleep(1.0)
        mobile_page.screenshot(path=os.path.join(output_dir, "12_mobile_viewport_hero.png"))
        print("Captured 12_mobile_viewport_hero.png")
        
        mobile_page.screenshot(path=os.path.join(output_dir, "13_mobile_viewport_full.png"), full_page=True)
        print("Captured 13_mobile_viewport_full.png")
        
        browser.close()
        print("All screenshots successfully captured in:", output_dir)

if __name__ == "__main__":
    capture_screenshots()
