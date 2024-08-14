document.addEventListener("DOMContentLoaded", function (e) {
    e.preventDefault();
    const headers = document.querySelectorAll(".accordion-header");
    const nums = document.querySelectorAll(".number");
    nums.forEach(num => num.classList.add('active'));



    function resetAccordionItems() {
        document.querySelectorAll(".accordion-item").forEach(item => {
            item.style.backgroundColor = '';
            item.querySelector(".accordion-header").style.display = 'flex';
            item.querySelector(".accordion-content").style.display = 'none';
            item.querySelector(".number").style.color = '#090909';
            item.querySelector(".number").style.alignItems = 'center';
            item.querySelector('.line').style.display = 'block';


            // item.style.transition = 'all 0.3s ease-in-out';
            // item.querySelector(".number").style.transition = '0.3s ease-in';
            // item.querySelector(".number").style.transition = 'color 0.3s ease-in';
            // item.querySelector(".accordion-content").style.transition = 'all 0.3s ease-in-out';
        });
    }



    function setActiveAccordion(item, header, content) {
        item.style.backgroundColor = '#090909';
        header.style.display = 'none';
        content.style.display = 'block';
        item.querySelector('.line').style.display = 'none';
        item.querySelector(".number").style.color = 'gray';

        item.querySelector(".number").style.display = 'block';
        item.querySelector(".number").style.alignItems = 'flex-start';
        item.querySelector(".number").style.justifyContent = 'flex-start';
        item.querySelector(".number").style.padding = '10px 0px 0px 50px';
        transitionOnNUM();
      
        // item.querySelector(".number").style.transition = 'all 0.3s ease-in-out';
        // content.style.transition = '0.3s ease-in';
    }
    function transitionOnNUM(){
        document.querySelectorAll(".accordion-item").forEach(item => {
            
            item.querySelector(".number").style.transition = 'all 0.8s ease-in-out';
            item.querySelector(".accordion-content").style.transition = 'all 0.8s ease-in-out';
        });
    }

    const firstItem = headers[0].parentElement;
    const firstHeader = headers[0];
    const firstContent = firstHeader.nextElementSibling;
    setActiveAccordion(firstItem, firstHeader, firstContent);

    headers.forEach((header) => {
        header.addEventListener("click", (e) => {
            // e.preventDefault();
            const item = header.parentElement;
            const content = header.nextElementSibling;
            const isActive = content.style.display === "block";
           
            resetAccordionItems();
            // transitionOnNUM();
           
            if (!isActive) {
                setActiveAccordion(item, header, content);
                // item.querySelector('.line').style.display='block';
               
            }

        });
    });
});


