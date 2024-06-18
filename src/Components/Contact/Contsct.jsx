import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div class="container">
        <ul class="content-list">
          <h1 class="title-1">Наши контакты</h1>
          <li class="content-list__item">
            <h2 class="title-2">Локация</h2>
            <p>гор. Курган, ул.Гоголя, д. 88</p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Telegram / WhatsApp</h2>
            <p>
              <a href="tel:+79051234567">(3522) 606-606, 55-30-80</a>
            </p>
          </li>
          <li class="content-list__item">
            <h2 class="title-2">Email</h2>
            <p>
              <a href="mailto:webdev@protonmail.com">reklama@rosbc.ru</a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
