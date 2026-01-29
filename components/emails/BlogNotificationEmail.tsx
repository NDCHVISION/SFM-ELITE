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
 * 
 * Welcome email explaining Sankofa Family Medicine's philosophy and what subscribers
 * can expect from the newsletter
 */
export function generateSubscriptionConfirmationEmail(unsubscribeUrl: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Medicine That Remembers | Sankofa Family Medicine</title>
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
    Thank you for subscribing to Sankofa Family Medicine. Your health is better supported when one physician has the time, access, and continuity to know your history.
  </div>
  
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0a1628;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" align="center" style="max-width: 600px; margin: 0 auto;">
          
          <!-- Header -->
          <tr>
            <td style="text-align: center; padding-bottom: 30px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: normal; color: #C9A227; font-family: 'Georgia', 'Times New Roman', serif; letter-spacing: 0.05em;">
                Medicine That Remembers
              </h1>
              <p style="margin: 8px 0 0; font-size: 14px; color: #a8b8c8; font-style: italic;">
                Notes from Sankofa Family Medicine
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
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                Thank you for subscribing to Sankofa Family Medicine.
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                Sankofa Family Medicine was founded around one idea: your health is better supported when one physician has the time, access, and continuity to know your history and understand your needs over time. When the same doctor stays involved and is reachable, questions are answered sooner, decisions feel clearer, and next steps are easier to take.
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                The name <span style="color: #C9A227;">Sankofa</span> means "go back and retrieve what matters." In healthcare, this means holding the full timeline together. Past experiences, present habits, and future risks are not separate. They inform each other. What someone has lived through, how they are functioning now, and where they may be headed all shape health in ways that are often subtle but important.
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                This newsletter reflects that way of thinking. Here, we share clear health explanations, practical preventive guidance, and insight into how understanding the full picture over time helps concerns surface earlier and decisions feel more grounded.
              </p>
              
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                Whether you are a patient here or simply seeking to understand your health better, this space is here for ongoing reflection, understanding, and practical insight.
              </p>
              
              <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                I'm glad you're here.
              </p>
              
              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.7; color: #a8b8c8;">
                Warmly,<br>
                <span style="color: #C9A227; font-style: italic;">Dr. Yaw Nkrumah</span><br>
                <span style="font-size: 14px; color: #5a6672;">Founder, Sankofa Family Medicine</span>
              </p>
              
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="text-align: center;">
                    <a href="https://sankofafamilymedicine.com/blog" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 14px; font-weight: bold; color: #0a1628; background: linear-gradient(135deg, #C9A227 0%, #d4b048 100%); text-decoration: none; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.05em;">
                      Explore Health Insights →
                    </a>
                  </td>
                </tr>
              </table>
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
