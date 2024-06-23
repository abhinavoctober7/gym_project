const Button = ({ title }) => (
  <button
    type="button"
    class="text-sidebar text-sm text-center border border-sidebar active:ring-1 active:ring-sidebar font-medium rounded-lg hover:rounded-xl px-6 py-3"
  >
    {title}
  </button>
);

export default Button;
