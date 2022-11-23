import chevron from '../assets/chevron.png'

export const COLUMNS = [
  {
    Header: ' ',
    accessor: 'chevron',
    Cell: () => (
      <div className="pl-8">
        <img
          src={chevron}
          alt="chevron"
          width="20px"
          // onClick={() => console.log('click')}
        />
      </div>
    ),
  },
  {
    Header: 'DATE',
    accessor: 'date',
  },
  {
    Header: 'DESCRIPTION',
    accessor: 'description',
  },
  {
    Header: 'AMOUNT',
    accessor: 'amount',
  },
  {
    Header: 'BALANCE',
    accessor: 'balance',
  },
]
