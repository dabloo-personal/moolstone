export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Moolstone',
        url: 'https://moolstone.com',
        logo: 'https://moolstone.com/logo.png',
        sameAs: [
            'https://twitter.com/moolstone',
            'https://linkedin.com/company/moolstone'
        ],
        contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+91-7004085490',
            contactType: 'customer service',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi']
        }
    };

    return (
        <section>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </section>
    );
}
