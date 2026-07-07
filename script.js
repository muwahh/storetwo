/* Core Styling & Variables */
:root {
    --bg-dark: #0f111a;
    --card-bg: #1e2235;
    --accent-blue: #0070f3;
    --accent-green: #00df89;
    --text-main: #ffffff;
    --text-muted: #8a92b2;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Segoe UI', system-ui, sans-serif;
    margin: 0;
    scroll-behavior: smooth;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background: rgba(15, 17, 26, 0.8);
    backdrop-filter: blur(10px);
    position: sticky;
    top: 0;
    z-index: 100;
    border-bottom: 1px solid #2a2f45;
}

header .logo {
    font-size: 24px;
    font-weight: bold;
    background: linear-gradient(45deg, var(--accent-blue), var(--accent-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

nav a {
    color: var(--text-muted);
    text-decoration: none;
    margin-left: 20px;
    transition: color 0.2s;
}

nav a:hover {
    color: var(--text-main);
}

/* Hero Section */
.hero {
    text-align: center;
    padding: 100px 20px;
    background: radial-gradient(circle at center, #1e2235 0%, var(--bg-dark) 70%);
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 15px;
}

.hero p {
    color: var(--text-muted);
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 30px auto;
}

.cta-btn {
    background: var(--accent-blue);
    color: white;
    text-decoration: none;
    padding: 14px 30px;
    border-radius: 8px;
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s, background 0.2s;
}

.cta-btn:hover {
    transform: translateY(-2px);
    background: #0060d6;
}

/* Product Section */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 20px;
}

.section-title {
    text-align: center;
    font-size: 32px;
    margin-bottom: 40px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.product-card {
    background: var(--card-bg);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
    border: 1px solid #2a2f45;
    display: flex;
    flex-direction: column;
}

.badge {
    position: absolute;
    top: 15px;
    left: 15px;
    background: var(--accent-green);
    color: #000;
    padding: 5px 10px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 20px;
}

.product-info {
    padding: 25px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.product-info h3 {
    margin-top: 15px;
    font-size: 22px;
}

.description {
    color: var(--text-muted);
    font-size: 14px;
    line-height: 1.5;
    flex-grow: 1;
}

.price {
    font-size: 20px;
    font-weight: bold;
    color: var(--accent-green);
    margin: 15px 0;
}

.interest-btn {
    background: transparent;
    border: 2px solid var(--accent-blue);
    color: var(--text-main);
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.2s;
}

.interest-btn:hover {
    background: var(--accent-blue);
}

/* Modal Pop-up */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: var(--card-bg);
    padding: 40px;
    border-radius: 12px;
    max-width: 450px;
    width: 90%;
    position: relative;
    border: 1px solid #2a2f45;
}

.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 28px;
    cursor: pointer;
    color: var(--text-muted);
}

.close-btn:hover {
    color: white;
}

#inquiryForm input, #inquiryForm textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    background: var(--bg-dark);
    border: 1px solid #2a2f45;
    border-radius: 6px;
    color: white;
    box-sizing: border-box;
}

.submit-btn {
    width: 100%;
    background: var(--accent-green);
    color: #000;
    border: none;
    padding: 12px;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px;
}

footer {
    text-align: center;
    padding: 40px;
    color: var(--text-muted);
    border-top: 1px solid #2a2f45;
    margin-top: 60px;
}