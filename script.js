// const indexArticles = document.getElementById("index-articles")
// const contentArticles = document.getElementById("article-index-articles")

// indexArticles.addEventListener("click", () => {
//     indexArticles.addEventListener("click", () => {
//         contentArticles.classList.toggle("hidden");
//         const isVisible = !contentArticles.classList.contains("hidden");
//         contentArticles.setAttribute("aria-hidden", isVisible.toString());
//     });
// });

// const indexMasses = document.getElementById("index-masses")
// const contentMasses = document.getElementById("article-index-masses")

// indexMasses.addEventListener("click", () => {
//     indexMasses.addEventListener("click", () => {
//         contentMasses.classList.toggle("hidden");
//         const isVisible = !contentMasses.classList.contains("hidden");
//         contentMasses.setAttribute("aria-hidden", isVisible.toString());
//     });
// });

// const indexLists = document.getElementById("index-lists1")
// const contentLists = document.getElementById("article-index-lists")

// indexLists.addEventListener("click", () => {
//     indexLists.addEventListener("click", () => {
//         contentLists.classList.toggle("hidden");
//         const isVisible = !contentLists.classList.contains("hidden");
//         contentLists.setAttribute("aria-hidden", isVisible.toString());
//     });
// });


// const indexBids = document.getElementById("index-bids")
// const contentBids = document.getElementById("article-index-bids")

// indexBids.addEventListener("click", () => {
//    indexBids.addEventListener("click", () => {
//         contentBids.classList.toggle("hidden");
//         const isVisible = !contentMasses.classList.contains("hidden");
//         contentBids.setAttribute("aria-hidden", isVisible.toString());
//     });
// });

// console.log(indexArticles)
// console.log(indexMasses)
// console.log(indexLists)
// console.log(indexBids)



// before the chatgpt bullshit
// document.addEventListener('DOMContentLoaded', function () {
//     const buttons = document.querySelectorAll('.icons-menu-list li');

//     buttons.forEach(button => {
//         const checkbox = button.querySelector('input[type="checkbox"]');
//         const content = button.querySelector('.list-content');

//         checkbox.addEventListener('change', function () {
//             if (checkbox.checked) {
//                 content.classList.add('active');
//                 // Optionally, adjust styles or add animations here
//             } else {
//                 content.classList.remove('active');
//             }

//             // Close all other open contents
//             buttons.forEach(otherButton => {
//                 const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
//                 const otherContent = otherButton.querySelector('.list-content');
                
//                 if (otherCheckbox !== checkbox && otherCheckbox.checked) {
//                     otherCheckbox.checked = false;
//                     otherContent.classList.remove('active');
//                 }
//             });
//         });
//     });
// });



// 9.7
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.icons-menu-list li');

    buttons.forEach(button => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        const content = button.querySelector('.list-content');

        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                content.classList.add('active');
                content.style.display = 'flex'; // Ensure content is displayed
            } else {
                content.classList.remove('active');
                setTimeout(() => content.style.display = 'none', 300); // Delay hiding to match transition
            }

            // Close all other open contents
            buttons.forEach(otherButton => {
                const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
                const otherContent = otherButton.querySelector('.list-content');
                
                if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                    otherCheckbox.checked = false;
                    otherContent.classList.remove('active');
                    setTimeout(() => otherContent.style.display = 'none', 300); // Delay hiding to match transition
                }
            });
        });
    });
});