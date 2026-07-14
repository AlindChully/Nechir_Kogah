const products = [
    // المصححات (0.x)
    {code:"0.02", color:"#e4e4e2"}, // رمادي مصحح
    {code:"0.1", color:"#c6b194"},  // رمادي دخاني
    {code:"0.2", color:"#e0cea6"},  // بنفسجي مصحح

    // الألوان الغامقة (1.x - 4.x)
    {code:"1.0", color:"#20251f"},  // أسود طبيعي
    {code:"1.1", color:"#161a1b"},  // أسود مزرق

    {code:"3.0", color:"#78645b"},  // بني غامق جداً
    {code:"3.66", color:"#754050"}, // بني محمر عميق

    {code:"4.0", color:"#2a160d"},  // بني

    // الألوان المتوسطة (5.x - 6.x)
    {code:"5.0", color:"#6a5447"},  // بني فاتح
    {code:"5.65", color:"#871d21"}, // أحمر خشب الورد

    {code:"6.0", color:"#664d39"},  // أشقر غامق
    {code:"6.7", color:"#673a1b"},  // أشقر غامق شوكولاتة

    // درجات الأشقر (7.x)
    {code:"7.0", color:"#553b2e"},  // أشقر طبيعي
    {code:"7.1", color:"#45382f"},  // أشقر رمادي
    {code:"7.3", color:"#aa7c4b"},  // أشقر ذهبي
    {code:"7.7", color:"#623c2f"},  // أشقر شوكولاتة
    {code:"7.11", color:"#7b6955"}, // أشقر رمادي عميق

    // درجات الأشقر الفاتح (8.x)
    {code:"8.0", color:"#8d745e"},  // أشقر فاتح
    {code:"8.1", color:"#7a6b56"},  // أشقر فاتح رمادي
    {code:"8.3", color:"#a98d5e"},  // أشقر فاتح ذهبي
    {code:"8.11", color:"#685743"}, // أشقر فاتح رمادي عميق
    {code:"8.37", color:"#6e4936"}, // أشقر ذهبي نحاسي
    {code:"8.45", color:"#71331e"}, // أشقر نحاسي أحمر
    {code:"8.73", color:"#b56e2e"}, // أشقر فاتح شوكولاتة ذهبي

    // الأشقر الفاتح جداً
    {code:"10.0", color:"#d8be8b"}  // أشقر فاتح جداً
];


const container = document.getElementById("products");


// 1. عرض المنتجات
products.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="image/${index + 1}.jpeg" class="product" alt="Color Space Infinity">
        <div class="product-name">Color Space Infinity</div>
        <div class="shade-number">Code: ${item.code}</div>
        <div class="color-circle" style="background:${item.color}; box-shadow: 0 0 15px ${item.color}80;"></div>
    `;
    container.appendChild(card);
});

// 2. تفعيل الأنيميشن عند الظهور
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(card => observer.observe(card));

// 3. البحث الذكي
document.getElementById("searchColor").addEventListener("input", function() {
    const value = this.value.trim().toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const code = card.querySelector(".shade-number").textContent.toLowerCase();
        card.style.display = code.includes(value) ? "block" : "none";
    });
});

window.addEventListener("orientationchange", function() {
    // تأخير بسيط لإعطاء المتصفح فرصة لحساب الأبعاد الجديدة ثم عمل ريفرش
    setTimeout(function() {
        window.location.reload();
    }, 500);
});
