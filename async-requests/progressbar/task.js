document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const progress = document.getElementById('progress');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fileInput = document.getElementById('file');
        const file = fileInput.files[0];
        
        if (!file) {
            alert('Пожалуйста, выберите файл.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();

        xhr.upload.addEventListener('progress', function(event) {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                progress.value = percentComplete;
            }
        });

        xhr.addEventListener('load', function() {
            if (xhr.status === 200) {
                alert('Файл успешно загружен!');
                progress.value = 100;
            } else {
                alert('Произошла ошибка при загрузке файла.');
            }
        });

        xhr.addEventListener('error', function() {
            alert('Ошибка загрузки файла.');
        });

        xhr.open('POST', form.action);
        xhr.send(formData);
    });
});
