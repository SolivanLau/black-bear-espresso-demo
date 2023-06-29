const MenuItem = ({ itemName, price, price12Oz, price16Oz }) => {
  return (
    <tr className="menuItem">
      <td className="itemName">{itemName}</td>
      {price ? <td className="price">{`$${price.toFixed(2)}`}</td> : null}
      {price12Oz ? (
        <td className="price">{`$${price12Oz.toFixed(2)}`}</td>
      ) : null}
      {price16Oz ? (
        <td className="price">{`$${price12Oz.toFixed(2)}`}</td>
      ) : null}

      {/* <td className="price">{price ? `$${price.toFixed(2)}` : null}</td>
      <td className="price">{price12Oz ? `$${price12Oz.toFixed(2)}` : null}</td>
      <td className="price">{price16Oz ? `$${price12Oz.toFixed(2)}` : null}</td> */}
    </tr>
  );
};
export default MenuItem;
