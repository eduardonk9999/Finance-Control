import ValoresTable from "../ValoresTable/inedx";


function Table () {
  return(
    <table>
      <thead>
        <tr>
          <td>title</td>
          <td>valor</td>
          <td>Categoria</td>
          <td>Data</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <ValoresTable  />
        </tr>
      </tbody>
    </table>
  )
}

export default Table;