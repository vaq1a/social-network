import transport from "../core/mailer.js";

export const sendMail = ({
    fromMail,
    toMail,
    subject,
    html,
}) => {
    transport.sendMail({
        from: fromMail, // sender address
        to: toMail, // list of receivers
        subject: subject, // Subject line
        html: html, // html body
    },
    function(err, info) {
        if(err) {
            console.log(err);
        } else {
            console.log('Сообщение отправлено!');
        }
    });
}