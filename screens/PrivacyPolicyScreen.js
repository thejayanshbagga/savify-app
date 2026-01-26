import React from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../styles/PrivacyPolicy.styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function PrivacyPolicyScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Privacy Notice</Text>

        <Text style={styles.paragraph}>
          At Savify, your privacy is not just a feature of our app; it is a
          fundamental part of our mission. Our goal is to create a money
          management platform that empowers young adults and students to save
          smarter, spend wisely, and build long-term financial confidence. To do
          this effectively, we must collect and process some of your information.
          We understand that your personal and financial data is highly sensitive,
          and we want to assure you that we treat it with the utmost care,
          security, and transparency.
        </Text>

        <Text style={styles.paragraph}>
          This privacy notice explains what types of data we collect, why we
          collect it, how we protect it, and what rights you have in relation to
          it. We encourage you to read it carefully, as by using Savify, you are
          agreeing to the practices described below.
        </Text>

        <Text style={styles.sectionTitle}>Information We Collect</Text>
        <Text style={styles.paragraph}>
          When you use Savify, we gather information in several ways. Some of this
          is information you provide directly, such as when you create an account
          and enter your name, email address, and password. This allows us to
          uniquely identify you and secure your profile.
        </Text>

        <Text style={styles.paragraph}>
          We also collect financial data when you choose to connect external
          accounts, such as bank accounts, debit cards, credit cards, or digital
          wallets. This may include account balances, transaction history, and
          payment information. Features like Savify Save (our round-up savings
          tool) and Savify Split (for bill splitting) require this type of data to
          function. If you decide to use our investment or crypto-saving features,
          we may collect additional financial details related to your portfolio or
          connected wallets. Importantly, these features are optional; you remain
          in full control of what information is shared.
        </Text>

        <Text style={styles.paragraph}>
          In addition, we collect technical information automatically from your
          device. This may include your device type, operating system, app
          version, IP address, and general usage statistics. We use this data to
          ensure Savify runs smoothly, to fix issues, and to understand how our
          users interact with the app.
        </Text>

        <Text style={styles.sectionTitle}>How We Use Your Information</Text>
        <Text style={styles.paragraph}>
          The information we collect is used solely to provide and improve your
          Savify experience. We believe that your data should work for you, not
          the other way around. Specifically, we use your information to:
        </Text>
        <Text style={styles.bulletPoint}>• Provide Services: Access to account data allows us to track savings, round up purchases, or split bills accurately.</Text>
        <Text style={styles.bulletPoint}>• Personalize Your Experience: We use your financial data and preferences to tailor dashboards and recommend personalized savings goals.</Text>
        <Text style={styles.bulletPoint}>• Enhance Performance: Usage data helps us spot bugs and make improvements that keep Savify reliable.</Text>
        <Text style={styles.bulletPoint}>• Develop New Features: Insights guide us to create new tools like AI-powered recommendations.</Text>
        <Text style={styles.bulletPoint}>• Communicate With You: We may send updates, new feature alerts, or marketing messages (only if you've opted in).</Text>

        <Text style={styles.sectionTitle}>Sharing of Data</Text>
        <Text style={styles.paragraph}>
          We only share your data when necessary:
        </Text>
        <Text style={styles.bulletPoint}>• With Service Providers: Trusted third parties like payment processors and analytics providers, who are legally bound to protect your data.</Text>
        <Text style={styles.bulletPoint}>• With Your Consent: When you connect external services like your bank or crypto wallet, we only share the data needed to enable those connections.</Text>
        <Text style={styles.bulletPoint}>• For Legal or Safety Reasons: If required by law or to prevent fraud or misuse.</Text>

        <Text style={styles.sectionTitle}>Security and Protection</Text>
        <Text style={styles.paragraph}>
          We use bank-level encryption, secure servers, and constant monitoring to
          safeguard your financial data. Sensitive information is encrypted both
          in transit and at rest. Only trained team members have access to your
          personal data, and we perform regular audits to ensure compliance.
        </Text>

        <Text style={styles.sectionTitle}>Your Rights and Choices</Text>
        <Text style={styles.paragraph}>
          You are in control of your information. You can:
        </Text>
        <Text style={styles.bulletPoint}>• Update or delete your account at any time.</Text>
        <Text style={styles.bulletPoint}>• Manage permissions for linked accounts or notifications.</Text>
        <Text style={styles.bulletPoint}>• Request a copy of your data in a readable format.</Text>
        <Text style={styles.bulletPoint}>• Withdraw consent for marketing or optional features.</Text>

        <Text style={styles.sectionTitle}>Children's Privacy</Text>
        <Text style={styles.paragraph}>
          Savify is designed for students and young adults. We do not knowingly
          collect data from children under 13 without parental consent. If such
          data is found, it will be removed immediately.
        </Text>

        <Text style={styles.sectionTitle}>Updates to This Privacy Notice</Text>
        <Text style={styles.paragraph}>
          As Savify evolves, this policy may change. Major updates will be
          communicated within the app before taking effect.
        </Text>

        <Text style={styles.footer}>Last updated: November 2025</Text>
      </ScrollView>
    </SafeAreaView>
  );
}