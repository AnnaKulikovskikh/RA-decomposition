import New from './New'

export default function News() {
    const data = [
        {logo: "@",  title: "Войну и мир уберут из школьной программы", href: "https://yandex.ru"},
        {logo: "@",  title: "Канал ТНТ перезапускает Санту-Барбару", href: "https://yandex.ru"},
        {logo: "%",  title: "Джордж Мартин отказался дописывать Игру Перстолов", href: "https://yandex.ru"},
    ]
    const news = data.map(item => {
        return(
            <New 
               logo = {item.logo}
               title = {item.title}
               href = {item.href}
            />
        )
    })
    
    return(
        <section>
            {news}
        </section>
    )
}