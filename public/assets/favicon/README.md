# Favicon Assets

This folder contains favicon files for the Luminary Co. website.

## 📁 Required Files

### **Primary Favicon**
- **`luminary-favicon-64x64.png`** (64x64 PNG)
  - Main favicon for modern browsers
  - Used in browser tabs and bookmarks
  - **Priority:** HIGH

### **Legacy Support**
- **`luminary-favicon.ico`** (16x16, 32x32, 48x48 ICO)
  - Traditional favicon format for older browsers
  - **Priority:** MEDIUM

### **Apple Touch Icon**
- **`luminary-apple-touch-icon.png`** (180x180 PNG)
  - Icon for iOS devices when saving to home screen
  - **Priority:** MEDIUM

## 🎨 Design Requirements

### **64x64 Favicon (Primary)**
- **Size:** Exactly 64x64 pixels
- **Format:** PNG with transparency
- **Colors:** Use brand palette (#ffc75b, #000000, #ffffff)
- **Style:** Simplified version of main logo
- **Clarity:** Must be recognizable at very small sizes

### **Design Tips**
- **Keep it simple** - avoid complex details
- **Use high contrast** - ensure visibility at small sizes
- **Test at 16x16** - should still be recognizable
- **Maintain brand identity** - consistent with main logo

## 🔧 HTML Integration

The favicon is already integrated into your HTML:

```html
<!-- Favicon -->
<link rel="icon" type="image/png" sizes="64x64" href="assets/favicon/luminary-favicon-64x64.png">
<link rel="icon" type="image/x-icon" href="assets/favicon/luminary-favicon.ico">
<link rel="apple-touch-icon" sizes="180x180" href="assets/favicon/luminary-apple-touch-icon.png">
```

## 🚀 Generation Process

1. **Create 64x64 favicon** using AI tools
2. **Test visibility** at small sizes
3. **Generate ICO file** (optional, for legacy support)
4. **Create Apple touch icon** (optional, for iOS)
5. **Test in browser** - should appear in tab

## 📱 Browser Support

- **Modern browsers:** PNG favicon (64x64)
- **Older browsers:** ICO favicon
- **iOS devices:** Apple touch icon
- **Android:** Uses PNG favicon

---

**Note:** The 64x64 PNG favicon is the most important. Generate this first, then add the others if needed.
