export default function Output({ bill, tip }) {
  return (
    <h3>
      You pay {bill + tip} ($ {bill} + $ B {tip})
    </h3>
  );
}
