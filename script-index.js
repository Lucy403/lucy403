
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.big-metadata-icons');

    buttons.forEach(button => {
        const checkbox = button.querySelector('input[type="checkbox"]');
        const content = button.querySelector('.list-content');
        const label = button.querySelector('label');
        const img = button.querySelector('label img');

        checkbox.addEventListener('click', function () {
            // Close all other open contents and reset icons
            buttons.forEach(otherButton => {
                const otherCheckbox = otherButton.querySelector('input[type="checkbox"]');
                const otherContent = otherButton.querySelector('.list-content');
                const otherLabel = otherButton.querySelector('label');
                const otherImg = otherButton.querySelector('label img');

                if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                    otherCheckbox.checked = false;
                    otherContent.classList.add('hidden');
                    otherLabel.classList.remove('checked');
                    otherImg.classList.remove('small'); // Remove the 'small' class
                }
            });

            // Toggle current content and update icon
            content.classList.toggle('hidden');
            label.classList.toggle('checked');

            // Toggle the 'small' class for the image when checked
            img.classList.toggle('small', checkbox.checked);
        });
    });
});
