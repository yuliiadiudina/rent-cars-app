import css from './NotFoundNotification.module.css'

function NotFoundNotification() {
  return (
    <section className={css.sectionNotFound}>
      <h3 className={css.sectionNotFoundTitle}>Oops! We can't find the page you're looking for &#128549;</h3>
      <h4 className={css.sectionNotFoundTitle}>You tried to request a page that doesn't exist</h4>
    </section>
  );
}
export default NotFoundNotification;
