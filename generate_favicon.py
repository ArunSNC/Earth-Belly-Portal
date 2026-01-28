from PIL import Image
import os

def generate_favicon(input_path, output_paths):
    try:
        if not os.path.exists(input_path):
            print(f"Error: Input file not found at {input_path}")
            return

        img = Image.open(input_path)
        
        # Standard icon sizes
        icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)]
        
        for output_path in output_paths:
            print(f"Generating favicon at: {output_path}")
            img.save(output_path, format='ICO', sizes=icon_sizes)
            print(f"Successfully saved {output_path}")

    except Exception as e:
        print(f"Error converting favicon: {e}")

if __name__ == "__main__":
    input_png = "/home/arunk/Documents/personal/earth-belly-workspace/earth-belly-portal/public/assets/images/earth_belly_logo_transparent.png"
    
    # List of locations to replace
    output_files = [
        "/home/arunk/Documents/personal/earth-belly-workspace/earth-belly-portal/src/favicon.ico",
        "/home/arunk/Documents/personal/earth-belly-workspace/earth-belly-portal/public/favicon.ico"
    ]
    
    # Filter only paths that directory exists (avoids error if public or src doesn't exist)
    valid_outputs = [p for p in output_files if os.path.isdir(os.path.dirname(p))]
    
    generate_favicon(input_png, valid_outputs)
