const doropdown = document.querySelectorAll('.dropdown');

doropdown.forEach(link => {
    link.addEventListener('click', function(e) {
        const parent = this.parentElement; // Это наш li.dropdown

            document.querySelectorAll('.dropdown').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('open');
                }
            });

            link.classList.toggle('open');
    });            
});

