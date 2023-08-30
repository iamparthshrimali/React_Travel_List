

export default function Stats({ items }) {
    let totalItem = items.length;
    let packedItem = items.filter(item => item.packed).length;
    let packedItemPercentage = Math.round((packedItem / totalItem) * 100);
    return <>
      <footer className='stats'>
        {packedItemPercentage !== 100 && totalItem  ? <em> You have {totalItem} items and you already have packed {packedItem}({packedItemPercentage}%)</em> : totalItem ? <em>You are ready to go</em>:" "}
      </footer>
    </>
  }