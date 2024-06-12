// JavaScript-код для проверки лимита бронирования времени
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form-id'); // Замените 'form-id' на реальный ID вашей формы
    form.addEventListener('submit', function(event) {
        var timeSelected = document.getElementById('time').value; // Получаем выбранное время из формы
        var peopleSelected = document.getElementById('people').value; // Получаем количество человек из формы

        // Здесь нужно написать логику для проверки количества бронировок для выбранного времени и количества человек
        // Если количество бронировок превышает лимит, отобразить сообщение об ошибке и предотвратить отправку формы
        // Если количество бронировок не превышает лимит, разрешить отправку формы

        if (isBookingLimitExceeded(timeSelected, peopleSelected)) {
            event.preventDefault(); // Предотвращаем отправку формы
            alert('Превышен лимит бронирования на выбранное время. Пожалуйста, выберите другое время.');
        }
    });

    // Функция для проверки превышения лимита бронирования
    function isBookingLimitExceeded(time, people) {
        // Здесь нужно написать логику для проверки лимита бронирования
        // Например, сравнить количество забронированных мест для выбранного времени с общим лимитом
        // Если количество превышает лимит, вернуть true, иначе вернуть false
    }
});
