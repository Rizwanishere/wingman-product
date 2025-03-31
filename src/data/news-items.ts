export type NewsItem = {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  fullContent: string;
};

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Synthetic Fraud Detection",
    date: "March 15, 2024",
    excerpt: "Synthetic identity fraud is a type of identity theft in which a criminal combines both real and fake personal information to create a new, fictious identity that can then be used for various identity-related schemes, such as credit card fraud, bank fraud, and more.",
    category: "Security Insights",
    imageUrl: "https://www.socure.com/_next/image?url=https%3A%2F%2Fmedia.socure.com%2Fapp%2Fuploads%2F2024%2F12%2FProducts_SigmaSyntheticFraud.webp&w=3840&q=75",
    fullContent: `Synthetic identity fraud has become one of the fastest-growing types of financial crimes in recent years. This sophisticated form of fraud poses a significant threat to both financial institutions and consumers.

    What is Synthetic Identity Fraud?
    Synthetic identity fraud occurs when criminals combine real and fake personal information to create entirely new, fictitious identities. These synthetic identities can then be used to:
    • Open new credit card accounts
    • Apply for loans
    • Make fraudulent purchases
    • Commit various other financial crimes

    Detection Challenges:
    • Traditional verification methods often fail to catch synthetic identities
    • Fraudsters patiently build credit histories for these fake identities
    • The presence of some legitimate information makes detection complex
    • Standard fraud detection systems may not flag these accounts initially

    Prevention Strategies:
    1. Advanced Data Analytics
    2. Machine Learning Models
    3. Pattern Recognition
    4. Identity Verification Technologies
    5. Cross-institutional Collaboration

    The Future of Prevention:
    As synthetic fraud continues to evolve, so must our detection and prevention methods. Financial institutions are increasingly turning to AI and machine learning to spot patterns and anomalies that might indicate synthetic identities.

    The Role of Technology:
    Modern fraud prevention systems use a combination of:
    • Behavioral biometrics
    • Device intelligence
    • Document verification
    • Network analysis
    • Real-time monitoring

    By implementing these advanced detection methods and staying vigilant, organizations can better protect themselves and their customers from synthetic identity fraud.`
  },
  {
    id: 2,
    title: "Understanding Social Engineering",
    date: "February 28, 2024",
    excerpt: "Social engineering is a dangerous weapon many cybercriminals use to achieve their nefarious goals. It leverages psychological manipulation to deceive individuals into divulging confidential or personal information.",
    category: "Cyber Threats",
    imageUrl: "https://www.nclose.com/wp-content/uploads/istockphoto-621493344-170667a.jpg",
    fullContent: `Social engineering remains one of the most effective methods cybercriminals use to breach security systems. By understanding human psychology and exploiting natural tendencies, attackers can bypass even the most sophisticated technical security measures.

    What is Social Engineering?
    At its core, social engineering is the art of manipulating people into taking actions or divulging confidential information. Unlike technical attacks, social engineering preys on human psychology and emotions.

    Common Social Engineering Tactics:
    1. Phishing
    • Email scams
    • Fake websites
    • SMS phishing (smishing)
    • Voice phishing (vishing)

    2. Pretexting
    • Creating false scenarios
    • Impersonating authority figures
    • Building trust over time

    3. Baiting
    • Physical media drops
    • Malware-laden downloads
    • Fraudulent advertisements

    Protection Strategies:
    • Regular employee training
    • Implementation of strict verification procedures
    • Multi-factor authentication
    • Zero-trust security model
    • Regular security assessments

    The Human Firewall:
    The best defense against social engineering is an educated and aware workforce. Key aspects include:
    • Recognition of common attack patterns
    • Understanding of security protocols
    • Healthy skepticism of unusual requests
    • Clear reporting procedures
    • Regular security updates and reminders

    Technology's Role in Prevention:
    While the human element is crucial, technology can help:
    • Email filtering systems
    • Web filtering
    • Security awareness platforms
    • Behavior monitoring tools
    • Automated threat detection

    By combining human awareness with technological solutions, organizations can better protect themselves against social engineering attacks.`
  }
];