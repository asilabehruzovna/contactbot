const Name = document.querySelector('#name')
const Number = document.querySelector('#number')
const Message = document.querySelector('#message')


function SendMessage(){
    if(Name.value === '' || Number.value === '' || Message.value === ''){
        alert("Ma'lumotlarni to'liq kiriting")
    }
    else{

        const token = '6723654332:AAH7l8O8P57H6gQuYqrg-mTdvtDxJq3O-G4'
        const chat_id = -1001981606429
        let my_text =  `%0A 👨‍🦱 Name: ${Name.value} %0A 📞 Number: ${Number.value}  %0A ✍️ Message: ${Message.value}
        ` 
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}&parse_mode=html`

        let api = new XMLHttpRequest();
        api.open('GET',url,true)
        api.send();

        alert('Xabar yuborildi')

        Name.value = ''
        Number.value = ''
        Message.value = ''
    }
    
}