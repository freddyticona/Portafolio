Fixed photo upload issue in Admin Panel for adding new articles.

**Problem**: When publishing articles, users could only provide photo location URL - no direct file upload option, and was automatically replaced with a generic headshot.

**Solution**: Enhanced AdminPanel.tsx PostEditor component:

1. **Added file upload functionality** with Firebase Storage:
   - File input alongside URL input for flexibility
   - Automatic upload to `blog/` folder in Firebase Storage
   - Progress indicator and error handling
   - Automatic cleanup of file input after upload

2. **Improved user experience**:
   - Clear "Upload Image" button with upload state
   - Preview of uploaded image before publishing
   - Proper error messages in both Spanish and English
   - Support for .png, .jpg, .jpeg formats

3. **Enhanced image handling**:
   - Auto-generation of unique filenames with timestamps
   - Upload progress tracking with loading states
   - Graceful fallbacks and error recovery
   - Proper cleanup of component state

**Usage**:
- Go to `/admin` → `Posts` tab → `New Article`
- Use either "URL" field or "Upload Image" button
- For file upload: Select image file, see preview, then publish
- For URL: Paste direct image URL (e.g., /images/your-photo.jpg)

The photos you select will be uploaded to Firebase Storage and accessible via the generated URL. This allows you to:
- Upload your actual photos instead of generic placeholders
- Maintain full control over article imagery
- Use both local uploads and external image URLs

Added proper validation, error handling, and user feedback throughout the process for a smooth experience.