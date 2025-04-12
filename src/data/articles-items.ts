export type ArticlesItems = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  content: Array<
    | {
        type: 'heading' | 'paragraph';
        text: string;
      }
    | {
        type: 'list';
        items: string[];
      }
  >;
};

export const articlesItems: ArticlesItems[] = [
  {
    id: 1,
    title: "Synthetic Fraud Detection",
    date: "March 15, 2024",
    excerpt: "Synthetic identity fraud is a type of identity theft in which a criminal combines both real and fake personal information to create a new, fictious identity that can then be used for various identity-related schemes, such as credit card fraud, bank fraud, and more.",
    category: "Security Insights",
    imageUrl: "https://www.socure.com/_next/image?url=https%3A%2F%2Fmedia.socure.com%2Fapp%2Fuploads%2F2024%2F12%2FProducts_SigmaSyntheticFraud.webp&w=3840&q=75",
    content: [
      {
        type: 'paragraph',
        text: 'Synthetic identity fraud has become one of the fastest-growing types of financial crimes in recent years. This sophisticated form of fraud poses a significant threat to both financial institutions and consumers.'
      },
      {
        type: 'heading',
        text: 'What is Synthetic Identity Fraud?'
      },
      {
        type: 'list',
        items: [
          'Open new credit card accounts',
          'Apply for loans',
          'Make fraudulent purchases',
          'Commit various other financial crimes'
        ]
      },
      {
        type: 'heading',
        text: 'Detection Challenges:'
      },
      {
        type: 'list',
        items: [
          'Traditional verification methods often fail to catch synthetic identities',
          'Fraudsters patiently build credit histories for these fake identities',
          'The presence of some legitimate information makes detection complex',
          'Standard fraud detection systems may not flag these accounts initially'
        ]
      },
      {
        type: 'heading',
        text: 'Prevention Strategies:'
      },
      {
        type: 'list',
        items: [
          'Advanced Data Analytics',
          'Machine Learning Models',
          'Pattern Recognition',
          'Identity Verification Technologies',
          'Cross-institutional Collaboration'
        ]
      },
      {
        type: 'heading',
        text: 'The Future of Prevention:'
      },
      {
        type: 'paragraph',
        text: 'As synthetic fraud continues to evolve, so must our detection and prevention methods. Financial institutions are increasingly turning to AI and machine learning to spot patterns and anomalies that might indicate synthetic identities.'
      },
      {
        type: 'heading',
        text: 'The Role of Technology:'
      },
      {
        type: 'list',
        items: [
          'Behavioral biometrics',
          'Device intelligence',
          'Document verification',
          'Network analysis',
          'Real-time monitoring'
        ]
      },
      {
        type: 'paragraph',
        text: 'By implementing these advanced detection methods and staying vigilant, organizations can better protect themselves and their customers from synthetic identity fraud.'
      }
    ]
  },
  {
    id: 2,
    title: "Social Engineering: An E-Commerce Nightmare",
    date: "April 12, 2025",
    excerpt: "Social engineering is a manipulation technique used by fraudsters to deceive individuals into divulging confidential information. In e-commerce, it can result in stolen credentials, compromised accounts, and unauthorized transactions.",
    category: "Cyber Threats",
    imageUrl: "https://www.nclose.com/wp-content/uploads/istockphoto-621493344-170667a.jpg",
    content: [
      {
        type: 'heading',
        text: 'What is Social Engineering'
      },
      {
        type: 'paragraph',
        text: 'Social engineering is a manipulation technique used by fraudsters to deceive individuals into divulging confidential information or performing actions that compromise their security. In the context of e-commerce, this can mean convincing a customer to give away their login credentials, multi-factor authentication (MFA) codes, or other sensitive data.'
      },
      {
        type: 'heading',
        text: 'E-commerce Fraud'
      },
      {
        type: 'list',
        items: [
          'fraudster logs in using stolen credentials: A fraudster attempts to log in to the customer\'s account using previously stolen username and password combinations.',
          'detection triggers: If the system detects any suspicious activity, such as login attempts from unfamiliar devices or locations, it may flag the session as suspicious.',
          'calls the customer posing as the retailer: The fraudster contacts the customer, pretending to be from the retailer, and asks for assistance in resolving a "security issue."',
          'requests the customer’s OTP (One-Time Password): The fraudster convinces the customer to provide their OTP, which is sent as part of MFA to validate the login attempt.',
          'falls for the trick: The customer, trusting the fraudster\'s story, shares the OTP or other sensitive details.',
          'gains access and steals data or funds: With the stolen OTP or other information, the fraudster successfully logs in to the customer\'s account and can steal personal data, make unauthorized transactions, or otherwise cause harm.'
        ]
      },
      {
        type: 'paragraph',
        text: 'The goal of social engineering is often to gain unauthorized access to customer accounts, steal funds, or harvest valuable personal information for malicious purposes.'
      },
      {
        type: 'heading',
        text: 'How We Help'
      },
      {
        type: 'list',
        items: [
          'Fraud detection upon login: When a fraudster attempts to log in to a customer account, our product\'s detection system immediately analyzes the login attempt. This system uses machine learning models to assess whether the login is legitimate or likely to be fraudulent, even if the credentials have been compromised.',
          'Default to the most secure method: Once a suspicious login is detected, the system defaults to the most secure authentication method available, based on the customer’s account settings and device capabilities. This can include higher-level forms of MFA, such as biometric authentication or hardware-based tokens.',
          'Push notification as first preference: Instead of relying on a simple OTP, our system prioritizes sending a push notification to the customer\'s mobile device. This is a more secure and user-friendly way to verify identity, as it ensures that the customer is notified directly and can act on the request immediately.',
          'Contextual tokenized link: If necessary, we send a tokenized link that provides more contextual information to the customer, making it harder for a fraudster to misuse. The tokenized link contains details specific to the request, ensuring the customer knows exactly what action they are approving.',
          'Link is non-readable by the fraudster: The tokenized link is designed to be unreadable to the fraudster, further reducing the risk of manipulation. Even if the fraudster intercepts the link, they will not be able to extract any useful information from it.',
          'IP address detection: We track the IP address of the device where the tokenized link is clicked and accepted. This data is compared to the login session\'s origin, allowing us to identify inconsistencies that could indicate fraudulent activity.',
          'Order hold and verification: In more extreme cases, when there are significant red flags, the system can alert the commerce platform to place the order on hold until the customer can call and verify the transaction. This helps prevent unauthorized purchases and ensures the customer is fully aware of any suspicious activity.'
        ]
      },
      {
        type: 'heading',
        text: 'Noteworthy Mentions'
      },
      {
        type: 'list',
        items: [
          'Anomaly detection: The system constantly analyzes customer behavior patterns across various transactions and sessions. By identifying anomalies in these patterns, it can detect potential fraud even before it happens.',
          'Real-time alerts for connected orders: If a fraudster places an order, our system automatically triggers alerts for any subsequent orders that come from the same entity or exhibit similar suspicious traits. This multi-layered approach ensures that fraud is detected early and helps prevent further damage.',
          'Cross-channel protection: Our protection extends beyond just self-service channels (like web and mobile applications) and includes assisted channels (such as phone or chat support). If fraud is detected on a self-service channel, the system ensures that additional checks are applied across all other channels to maintain a high level of security.'
        ]
      },
      {
        type: 'heading',
        text: 'Conclusion: Reducing Social Engineering Risk in E-Commerce'
      },
      {
        type: 'paragraph',
        text: 'By integrating our advanced fraud detection and prevention system, e-commerce platforms can significantly reduce the risk of social engineering attacks. Our product not only protects customer accounts through more secure login processes but also prevents fraudsters from manipulating customers into divulging sensitive information. With machine learning, tokenized links, and contextual alerts, we provide a multi-layered defense against fraud, ensuring that both customers and retailers are better protected in today’s increasingly complex digital landscape.'
      }
    ]
  }
];