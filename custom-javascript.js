const preview = document.getElementById("preview-box");
const output = document.getElementById("css-output");

const containerControls = ["flex-direction", "justify-content", "align-items", "flex-wrap", "gap"];

const itemControls = ["flex-grow", "flex-shrink", "flex-basis"];

[...containerControls, ...itemControls].forEach((id) => {
   document.getElementById(id).addEventListener("input", updateFlexbox);
});

function updateFlexbox() {
   const direction = document.getElementById("flex-direction").value;
   const justify = document.getElementById("justify-content").value;
   const align = document.getElementById("align-items").value;
   const wrap = document.getElementById("flex-wrap").value;
   const gap = document.getElementById("gap").value + "px";

   preview.style.flexDirection = direction;
   preview.style.justifyContent = justify;
   preview.style.alignItems = align;
   preview.style.flexWrap = wrap;
   preview.style.gap = gap;

   const grow = document.getElementById("flex-grow").value;
   const shrink = document.getElementById("flex-shrink").value;
   const basis = document.getElementById("flex-basis").value;

   document.querySelectorAll(".box").forEach((box) => {
      box.style.flexGrow = grow;
      box.style.flexShrink = shrink;
      box.style.flexBasis = basis;
   });

   output.textContent = `
/* Container */
display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align};
flex-wrap: ${wrap};
gap: ${gap};

/* Items */
flex-grow: ${grow};
flex-shrink: ${shrink};
flex-basis: ${basis};
  `.trim();
}

updateFlexbox();
