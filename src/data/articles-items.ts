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
    "id": 1,
    "title": "FRAUD PREVENTION USING PROXY: ENVOY & WEBASSEMBLY",
    "date": "April 20, 2025",
    "excerpt": "A modular, plug-and-play fraud detection pipeline powered by Envoy Proxy, Rust-based WebAssembly filters, and Wingman—a real-time fraud detection engine delivering sub-millisecond decisioning speed.",
    "category": "Fraud Prevention",
    "imageUrl": "https://www.researchdive.com/blogImages/OtGmhpxDz1.jpeg",
    "content": [
      {
        "type": "heading",
        "text": "Abstract"
      },
      {
        "type": "paragraph",
        "text": "A modular, plug-and-play fraud detection pipeline, powered by Envoy Proxy (as a reverse proxy), Rust-based WebAssembly filters (for lightweight inspection and policy enforcement), and Wingman—a real-time fraud detection and prevention engine delivering sub-millisecond decisioning speed. Vendor-agnostic, high-performance fraud firewall that can be deployed in front of any IAM or identity system, intercepting threats before they impact the business."
      },
      {
        "type": "heading",
        "text": "Introduction"
      },
      {
        "type": "paragraph",
        "text": "Security teams are under pressure to deliver both immediate threat response and frictionless customer experiences. Traditional IAM solutions offer limited extensibility, often bundling fraud modules as part of closed suites. Wingman, combined with Envoy Proxy and Rust/WASM filters, offers an independent, scalable alternative. It sits transparently in front of your application, enabling real-time decisions—without touching a line of app code."
      },
      {
        "type": "heading",
        "text": "Envoy Proxy: The Modern Reverse Proxy"
      },
      {
        "type": "paragraph",
        "text": "Originally developed by Lyft, Envoy Proxy is a high-performance edge and service proxy that powers modern service meshes and microservices."
      },
      {
        "type": "heading",
        "text": "Why Envoy for Fraud Detection?"
      },
      {
        "type": "list",
        "items": [
          "Acts as a transparent gateway for all incoming requests",
          "Enables inline request inspection via WASM filters",
          "Language-agnostic: Works with Java, Python, Node, etc.",
          "Deployment-flexible: Runs in containers, VMs, or bare metal"
        ]
      },
      {
        "type": "heading",
        "text": "WebAssembly + Rust: Programmable Inline Filtering"
      },
      {
        "type": "paragraph",
        "text": "WebAssembly enables safe, high-performance code execution in sandboxed environments like Envoy."
      },
      {
        "type": "heading",
        "text": "Why Rust?"
      },
      {
        "type": "list",
        "items": [
          "Memory-safe and thread-safe by design",
          "Fast execution, ideal for sub-rms decisions",
          "Great ecosystem for compiling to WASM (cargo-wasi, wasmitime)"
        ]
      },
      {
        "type": "heading",
        "text": "Wingman"
      },
      {
        "type": "paragraph",
        "text": "Wingman is a cybersecurity platform purpose-built for real-time identity fraud detection and prevention."
      },
      {
        "type": "heading",
        "text": "What Sets Wingman Apart"
      },
      {
        "type": "list",
        "items": [
          "Lightning-fast decisions: sub-millisecond response times",
          "Zero-latency customer experience",
          "API-first design: Easily called from Envoy filters",
          "Works with any IAM: Okta, Ping, Auth0, custom systems",
          "Pre-authentication protection: Stop bots before they even reach IAM"
        ]
      },
      {
        "type": "heading",
        "text": "Wingman in the Architecture"
      },
      {
        "type": "paragraph",
        "text": "Client → Envoy Proxy (WASM filter) → Wingman API\nRisk score + action\nAllow / Step-up / Block request"
      },
      {
        "type": "heading",
        "text": "Example Use Cases"
      },
      {
        "type": "list",
        "items": [
          "Login Protection: Block bots and brute-force attempts",
          "MFA Enforcement: Step-up risk-based MFA only when needed",
          "Early Threat Detection: Flag suspicious devices or behaviors before reaching app",
          "Defense in Depth: Adds a fraud layer before IAM and backend"
        ]
      },
      {
        "type": "heading",
        "text": "Benefits"
      },
      {
        "type": "list",
        "items": [
          "Zero App Change: Works as a reverse proxy; no code modifications",
          "Real-Time Protection: Inline fraud decisioning under 1ms",
          "Flexible: Works across any stack and IAM",
          "Scalable: Container-ready, horizontally scalable",
          "Secure: Leverages WASM sandboxing and Rust safety",
          "Customizable: Extend filters with new logic as needed"
        ]
      },
      {
        "type": "paragraph",
        "text": "The combination of Envoy + WebAssembly + Wingman unlocks a new paradigm of real-time, flexible, and independent fraud prevention. You don’t need to replace your IAM. You don’t need to modify your applications. You just need to run Envoy in front, inject a WASM filter, and let Wingman do the rest. It’s fraud prevention—simplified, accelerated, and production–ready."
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