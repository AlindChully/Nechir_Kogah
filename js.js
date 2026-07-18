const products = [
    {code:"0.02", color:"#e4e4e2"},
    {code:"0.1", color:"#c6b194"},  
    {code:"0.2", color:"#e0cea6"},  
    {code:"1.0", color:"#20251f"},  
    {code:"1.1", color:"#161a1b"},  
    {code:"3.0", color:"#78645b"},  
    {code:"3.66", color:"#754050"}, 
    {code:"4.0", color:"#2a160d"},  
    {code:"5.0", color:"#6a5447"},  
    {code:"5.65", color:"#871d21"}, 
    {code:"6.0", color:"#664d39"},  
    {code:"6.7", color:"#673a1b"},  
    {code:"7.0", color:"#553b2e"},  
    {code:"7.1", color:"#45382f"},  
    {code:"7.3", color:"#aa7c4b"},  
    {code:"7.7", color:"#623c2f"},  
    {code:"7.11", color:"#7b6955"},
    {code:"8.0", color:"#8d745e"}, 
    {code:"8.1", color:"#7a6b56"},  
    {code:"8.3", color:"#a98d5e"},  
    {code:"8.11", color:"#685743"}, 
    {code:"8.37", color:"#6e4936"}, 
    {code:"8.45", color:"#71331e"},
    {code:"8.73", color:"#b56e2e"}, 
    {code:"10.0", color:"#d8be8b"}  
];

const products2 = [
    {name:"شاهانە جێلی رجالی 5D"},
    {name:"SECRET Perfume"},
    {name:"Shawing gel"},
    {name:"Lemas Perfume"},
    {name:"سبر شعر رجالي"},
    {name:"كريم شاهانه"},
    {name:"Hair Color Shampoo Gel"},
    {name:"cuscinetto Antisudore"},
    {name:"STYLING Hair Gel"},
    {name:"Big Wax"},
    {name:"Aqua Wax"},
    {name:"Styling Powder"},
    {name:"عطور شاهانه"},
    {name:"Catherine Perfume"},
    {name:"Instincts Perfume"},
    {name:"Royal Blue Perfume"},
    {name:"Hair Color Cream"},
    {name:"Hair Color Shampoo Gel 2.0"},
    {name:"lint Rolles"},
    {name:"Blue Lady Perfume"},
    {name:"Blue For Men Perfume"},
    {name:"Hair Color Shampoo Gel 2.0"},
    {name:"Royale Blue Perfume"},
    {name:"Royale Perfume"},
    {name:"Cologne"},
    {name:"Romance Perfume"},
    {name:"Block Wax"},
];

const container = document.getElementById("products");
const container2 = document.getElementById("products2");

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

products2.forEach((item, index) => {
    const isRasasi = (index === 1) || 
                     (index >= 12 && index <= 15) || 
                     (index === 19) || 
                     (index === 20) || 
                     (index >= 22 && index <= 23) || 
                     (index === 25);

    const brandName = isRasasi ? "By RASASI" : "By my SHAHANA";

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="image/${index + 26}.jpeg" class="product" alt="Color Space Infinity">
        <div class="product-name">${item.name}</div>
        <div class="product-by">${brandName}</div>
    `;
    container.appendChild(card);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(".card").forEach(card => observer.observe(card));

document.getElementById("searchColor").addEventListener("input", function() {
    const value = this.value.trim().toLowerCase();
    document.querySelectorAll(".card").forEach(card => {
        const codeElement = card.querySelector(".shade-number");
        const nameElement = card.querySelector(".product-name");
        const code = codeElement ? codeElement.textContent.toLowerCase() : "";
        const name = nameElement ? nameElement.textContent.toLowerCase() : "";
        if (code.includes(value) || name.includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});

window.addEventListener("orientationchange", function() {
    setTimeout(function() {
        window.location.reload();
    }, 500);
});
