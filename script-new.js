// document.addEventListener('DOMContentLoaded', function () {
//   function applyToggleBehavior() {
//     if (window.matchMedia('(min-width: 391px)').matches) {
//       const buttons = document.querySelectorAll('.big-metadata-icons li');

//       buttons.forEach(button => {
//         const checkbox = button.querySelector('input[type="checkbox"]');
//         const content = button.querySelector('.list-content');
//         const label = button.querySelector('label');
//         const img = button.querySelector('label img');

//         checkbox.addEventListener('change', function () {
//           if (checkbox.checked) {
//             // Close all other open contents except the current one
//             buttons.forEach(otherButton => {
//               const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
//               const otherContent = otherButton.querySelector('.list-content');
//               const otherLabel = otherButton.querySelector('label');
//               const otherImg = otherButton.querySelector('label img');

//               if (otherCheckbox !== checkbox && otherCheckbox.checked) {
//                 otherCheckbox.checked = false;
//                 otherContent.classList.remove('active');
//                 otherLabel.classList.remove('checked');
//                 otherImg.classList.remove('small');
//               }
//             });

//             // Open current content
//             content.classList.add('active');
//             label.classList.add('checked');
//             img.classList.add('small');
//           } else {
//             // Toggle off current content
//             content.classList.remove('active');
//             label.classList.remove('checked');
//             img.classList.remove('small');
//           }
//         });
//       });
//     } else {
//       const buttons = document.querySelectorAll('.big-metadata-icons li');
//       buttons.forEach(button => {
//         const checkbox = button.querySelector('input[type="checkbox"]');
//         const content = button.querySelector('.list-content');
//         const label = button.querySelector('label');
//         const img = button.querySelector('label img');

//         checkbox.checked = false;
//         content.classList.remove('active');
//         label.classList.remove('checked');
//         img.classList.remove('small');
//       });
//     }
//   }

//   // Apply the behavior initially
//   applyToggleBehavior();

//   // Reapply the behavior on window resize
//   window.addEventListener('resize', applyToggleBehavior);
// });


document.addEventListener('DOMContentLoaded', function () {
  function applyToggleBehavior() {
    if (window.matchMedia('(min-width: 861px)').matches) {
      const buttons = document.querySelectorAll('.big-metadata-icons li');

      buttons.forEach(button => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        const content = button.querySelector('.list-content');
        const label = button.querySelector('label');
        const img = button.querySelector('label img');

        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            buttons.forEach(otherButton => {
              const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
              const otherContent = otherButton.querySelector('.list-content');
              const otherLabel = otherButton.querySelector('label');
              const otherImg = otherButton.querySelector('label img');

              if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                otherCheckbox.checked = false;
                otherContent.classList.remove('active');
                otherLabel.classList.remove('checked');
                otherImg.classList.remove('small');
              }
            });

            content.classList.add('active');
            label.classList.add('checked');
            img.classList.add('small');
          } else {
            content.classList.remove('active');
            label.classList.remove('checked');
            img.classList.remove('small');
          }
        });
      });
    } else {
      const buttons = document.querySelectorAll('.big-metadata-icons li');
      buttons.forEach(button => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        const content = button.querySelector('.list-content');
        const label = button.querySelector('label');
        const img = button.querySelector('label img');

        checkbox.checked = false;
        content.classList.remove('active');
        label.classList.remove('checked');
        img.classList.remove('small');
      });
    }
  }

  applyToggleBehavior();

  window.addEventListener('resize', applyToggleBehavior);
});

  

// new code for media 390px

document.addEventListener('DOMContentLoaded', function () {
  function applyToggleBehavior() {
    if (window.matchMedia('(max-width: 860px)').matches) {
      const buttons = document.querySelectorAll('.big-metadata-icons li');

      buttons.forEach(button => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        const content = button.querySelector('.list-content');
        const label = button.querySelector('label');
        const textToggle = button.querySelector('.toggle-text');

        checkbox.addEventListener('change', function () {
          if (checkbox.checked) {
            buttons.forEach(otherButton => {
              const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
              const otherContent = otherButton.querySelector('.list-content');
              const otherLabel = otherButton.querySelector('label');
              const otherTextToggle = otherButton.querySelector('.toggle-text');

              if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                otherCheckbox.checked = false;
                otherContent.classList.remove('active');
                otherLabel.classList.remove('checked');
                otherTextToggle.style.opacity = '0';
              }
            });

            content.classList.add('active');
            label.classList.add('checked');
            textToggle.style.opacity = '1';
          } else {
            content.classList.remove('active');
            label.classList.remove('checked');
            textToggle.style.opacity = '0';
          }
        });
      });
    } else {
      const buttons = document.querySelectorAll('.big-metadata-icons li');
      buttons.forEach(button => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        const content = button.querySelector('.list-content');
        const label = button.querySelector('label');
        const textToggle = button.querySelector('.toggle-text');

        checkbox.checked = false;
        content.classList.remove('active');
        label.classList.remove('checked');
        textToggle.style.opacity = '0';
      });
    }
  }

  // Apply the behavior initially
  applyToggleBehavior();

  // Reapply the behavior on window resize
  window.addEventListener('resize', applyToggleBehavior);
});


// document.addEventListener('DOMContentLoaded', function () {
//   const buttons = document.querySelectorAll('.big-metadata-icons li');

//   buttons.forEach(button => {
//     const checkbox = button.querySelector('input[type="checkbox"]');
//     const content = button.querySelector('.list-content');
//     const label = button.querySelector('label');
//     const img = button.querySelector('label img');

//     checkbox.addEventListener('change', function () {
//       if (checkbox.checked) {
//         // Close all other open contents except the current one
//         buttons.forEach(otherButton => {
//           const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
//           const otherContent = otherButton.querySelector('.list-content');
//           const otherLabel = otherButton.querySelector('label');
//           const otherImg = otherButton.querySelector('label img');

//           if (otherCheckbox !== checkbox && otherCheckbox.checked) {
//             otherCheckbox.checked = false;
//             otherContent.classList.remove('active');
//             otherLabel.classList.remove('checked');
//             otherImg.classList.remove('small');
//           }
//         });

//         // Open current content
//         content.classList.add('active');
//         label.classList.add('checked');
//         img.classList.add('small');
//       } else {
//         // Toggle off current content
//         content.classList.remove('active');
//         label.classList.remove('checked');
//         img.classList.remove('small');
//       }
//     });
//   });
// });
