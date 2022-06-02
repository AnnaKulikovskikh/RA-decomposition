import Content from './Content'

export default function Action() {
    return(
        <section>
            <Content>
                <h2>Погода</h2>
                <p>Утром +17</p>
                <p>днем +25</p>
            </Content>

            <Content>
                <h2>Посещаемое</h2>
                <p><b>Недвижимость</b> - о сталинках</p>
                <p><b>Маркет</b> - люстры и светильники</p>
                <p><b>Авто</b> - есть ли пробки на Марсе?</p>
            </Content>

            <Content>
                <h2>ТВ программа</h2>
                <p>Обо всем и ни о чем</p>
                <p>Немного фильма среди рекламы</p>
            </Content>

        </section>
    )
}