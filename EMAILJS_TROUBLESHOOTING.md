# EmailJS Troubleshooting Guide

## Current Configuration

- **Service ID**: service_xn84m79
- **Template ID**: template_cuxnk7d
- **Public Key**: SdkYRBXqh0yxTvN1z

## Issue

Contact form is failing with "Failed to send message. Please try again."

## Steps to Fix

### 1. Verify EmailJS Dashboard Settings

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)

1. **Check Service Status**
   - Go to Email Services
   - Verify `service_xn84m79` is active
   - Check that your email provider is properly connected

2. **Verify Template**
   - Go to Email Templates
   - Find template `template_cuxnk7d`
   - Ensure it has these placeholders:
     - `{{name}}`
     - `{{email}}`
     - `{{message}}`

3. **Check Public Key**
   - Go to Account > General
   - Verify Public Key matches: `SdkYRBXqh0yxTvN1z`

### 2. Template Configuration

Your template should look like this:

```
Subject: New Message from {{name}}

From: {{name}}
Email: {{email}}

Message:
{{message}}
```

### 3. Form Field Names

The form in `Contact.js` uses these field names:

- `name`
- `email`
- `message`

Make sure your EmailJS template uses the same variable names.

### 4. Testing Steps

1. Open browser console (F12)
2. Try to submit the form
3. Check for any error messages in the console
4. Look for the specific EmailJS error

### 5. Common Issues

**Issue: "Public Key is invalid"**

- Solution: Update `.env` with correct public key from EmailJS dashboard

**Issue: "Template not found"**

- Solution: Verify template ID in EmailJS dashboard matches `.env`

**Issue: "Service not found"**

- Solution: Verify service ID in EmailJS dashboard matches `.env`

**Issue: "Limit reached"**

- Solution: Check your EmailJS monthly quota (free plan has limits)

### 6. Alternative: Test with Email

If EmailJS continues to fail, you can temporarily display a mailto link:

```javascript
// In Contact.js, add this as a fallback
<a href='mailto:your-email@example.com?subject=Portfolio Contact&body=Name: ...'>
  Send Email
</a>
```

## After Making Changes

1. Restart the development server: `npm start`
2. Clear browser cache
3. Test the form again
