
document.addEventListener("DOMContentLoaded",()=>{
  let cart = 0;
  const count = document.querySelector("[data-cart-count]");
  document.querySelectorAll("[data-add-cart]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      cart++;
      if(count) count.textContent=cart;
      btn.textContent="Added ✓";
      setTimeout(()=>btn.textContent="Add to Cart",900);
    });
  });
  document.querySelectorAll("[data-demo-form]").forEach(form=>{
    form.addEventListener("submit",e=>{
      e.preventDefault();
      alert("Demo only — connect this form to your real email or e-commerce backend before publishing.");
    });
  });
});
