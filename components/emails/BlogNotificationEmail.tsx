/**
 * Blog Notification Email Template
 * 
 * A beautifully formatted email template for blog post notifications
 * that matches the Sankofa Family Medicine brand (dark theme with gold accents #C9A227)
 */

interface BlogNotificationEmailProps {
  title: string
  excerpt: string
  url: string
  author: string
  publishDate: string
  unsubscribeUrl: string
}

// HTML escape function to prevent XSS in email templates
function escapeHtml(text: string): string {
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return text.replace(/[&<>"']/g, (char) => htmlEscapes[char] || char)
}

export function generateBlogNotificationEmail({
  title,
  excerpt,
  url,
  author,
  publishDate,
  unsubscribeUrl,
}: BlogNotificationEmailProps): string {
  // Escape all user-provided content
  const safeTitle = escapeHtml(title)
  const safeExcerpt = escapeHtml(excerpt)
  const safeAuthor = escapeHtml(author)
  const safePublishDate = escapeHtml(publishDate)

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>New Article: ${safeTitle}</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #0a1628; font-family: 'Georgia', 'Times New Roman', serif;">
  <!-- Preview text -->
  <div style="display: none; max-height: 0; overflow: hidden;">
    ${safeExcerpt.substring(0, 150)}...
  </div>
  
  <!-- Main container -->
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0a1628;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" align="center" style="max-width: 600px; margin: 0 auto;">
          
          <!-- Header with logo/brand -->
          <tr>
            <td style="text-align: center; padding-bottom: 30px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: normal; color: #C9A227; font-family: 'Georgia', 'Times New Roman', serif; letter-spacing: 0.05em;">
                SANKOFA FAMILY MEDICINE
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #a8b8c8; font-style: italic;">
                Medicine That Remembers™
              </p>
            </td>
          </tr>
          
          <!-- Gold accent line -->
          <tr>
            <td style="padding-bottom: 30px;">
              <div style="height: 2px; background: linear-gradient(90deg, transparent, #C9A227, transparent);"></div>
            </td>
          </tr>
          
          <!-- New Article Badge -->
          <tr>
            <td style="text-align: center; padding-bottom: 20px;">
              <span style="display: inline-block; background-color: rgba(201, 162, 39, 0.15); border: 1px solid #C9A227; color: #C9A227; font-size: 11px; font-weight: bold; padding: 6px 16px; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.1em;">
                New Article Published
              </span>
            </td>
          </tr>
          
          <!-- Article Card -->
          <tr>
            <td style="background-color: #0f1f35; border-radius: 16px; overflow: hidden; border: 1px solid #2a4060;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                
                <!-- Article Content -->
                <tr>
                  <td style="padding: 32px;">
                    <!-- Title -->
                    <h2 style="margin: 0 0 16px; font-size: 24px; line-height: 1.3; color: #f0f4f8; font-family: 'Georgia', 'Times New Roman', serif; font-weight: normal;">
                      ${safeTitle}
                    </h2>
                    
                    <!-- Meta info -->
                    <p style="margin: 0 0 20px; font-size: 13px; color: #a8b8c8;">
                      By <span style="color: #C9A227;">${safeAuthor}</span> • ${safePublishDate}
                    </p>
                    
                    <!-- Excerpt -->
                    <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                      ${safeExcerpt}
                    </p>
                    
                    <!-- CTA Button -->
                    <table role="presentation" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="border-radius: 8px; background: linear-gradient(135deg, #C9A227 0%, #d4b048 100%);">
                          <a href="${url}" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 14px; font-weight: bold; color: #0a1628; text-decoration: none; text-transform: uppercase; letter-spacing: 0.05em;">
                            Read Full Article →
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Spacer -->
          <tr>
            <td style="height: 40px;"></td>
          </tr>
          
          <!-- Secondary CTA -->
          <tr>
            <td style="text-align: center; padding: 24px; background-color: rgba(201, 162, 39, 0.1); border-radius: 12px; border: 1px solid rgba(201, 162, 39, 0.2);">
              <p style="margin: 0 0 12px; font-size: 16px; color: #f0f4f8; font-family: 'Georgia', 'Times New Roman', serif;">
                Ready for personalized primary care?
              </p>
              <a href="https://sankofafamilymedicine.com/founders-waitlist" target="_blank" style="color: #C9A227; font-size: 14px; text-decoration: underline;">
                Join the Founders Waitlist →
              </a>
            </td>
          </tr>
          
          <!-- Spacer -->
          <tr>
            <td style="height: 40px;"></td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="text-align: center; padding-top: 20px; border-top: 1px solid #2a4060;">
              <p style="margin: 0 0 12px; font-size: 14px; color: #a8b8c8;">
                Sankofa Family Medicine
              </p>
              <p style="margin: 0 0 16px; font-size: 12px; color: #5a6672;">
                Washington State • <a href="mailto:info@sankofafamilymedicine.com" style="color: #C9A227; text-decoration: none;">info@sankofafamilymedicine.com</a>
              </p>
              <p style="margin: 0; font-size: 11px; color: #5a6672;">
                You're receiving this because you subscribed to our newsletter.<br>
                <a href="${unsubscribeUrl}" style="color: #a8b8c8; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

/**
 * Generate a subscription confirmation email
 */
export function generateSubscriptionConfirmationEmail(unsubscribeUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to Sankofa Family Medicine Newsletter</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0a1628; font-family: 'Georgia', 'Times New Roman', serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0a1628;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" align="center" style="max-width: 600px; margin: 0 auto;">
          
          <!-- Header -->
          <tr>
            <td style="text-align: center; padding-bottom: 30px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: normal; color: #C9A227; font-family: 'Georgia', 'Times New Roman', serif; letter-spacing: 0.05em;">
                SANKOFA FAMILY MEDICINE
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #a8b8c8; font-style: italic;">
                Medicine That Remembers™
              </p>
            </td>
          </tr>
          
          <!-- Gold line -->
          <tr>
            <td style="padding-bottom: 30px;">
              <div style="height: 2px; background: linear-gradient(90deg, transparent, #C9A227, transparent);"></div>
            </td>
          </tr>
          
          <!-- Welcome Message -->
          <tr>
            <td style="background-color: #0f1f35; border-radius: 16px; padding: 40px; border: 1px solid #2a4060;">
              <h2 style="margin: 0 0 20px; font-size: 24px; color: #f0f4f8; font-family: 'Georgia', 'Times New Roman', serif; text-align: center;">
                Welcome to Our Newsletter! 🎉
              </h2>
              
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                Thank you for subscribing to the Sankofa Family Medicine newsletter. You're now part of a community dedicated to personalized, preventive healthcare.
              </p>
              
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                Here's what you can expect:
              </p>
              
              <ul style="margin: 0 0 24px; padding-left: 20px; color: #a8b8c8; font-size: 15px; line-height: 1.8;">
                <li style="margin-bottom: 8px;"><span style="color: #C9A227;">✦</span> New blog articles on precision medicine and wellness</li>
                <li style="margin-bottom: 8px;"><span style="color: #C9A227;">✦</span> Health insights from Dr. Yaw Nkrumah</li>
                <li style="margin-bottom: 8px;"><span style="color: #C9A227;">✦</span> Updates on our direct primary care practice</li>
                <li><span style="color: #C9A227;">✦</span> Exclusive content for our community</li>
              </ul>
              
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    <a href="https://sankofafamilymedicine.com/blog" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 14px; font-weight: bold; color: #0a1628; background: linear-gradient(135deg, #C9A227 0%, #d4b048 100%); text-decoration: none; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.05em;">
                      Browse Our Articles →
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="text-align: center; padding-top: 30px;">
              <p style="margin: 0 0 12px; font-size: 12px; color: #5a6672;">
                Sankofa Family Medicine • Washington State
              </p>
              <p style="margin: 0; font-size: 11px; color: #5a6672;">
                <a href="${unsubscribeUrl}" style="color: #a8b8c8; text-decoration: underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}
