import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import DirectionIcon from '../icon/DirectionIcon';
import { Coordinates } from '../types';

type Props = {
    coordinates: Coordinates;
}

const TableComponent = (props: Props) => {
    const {coordinates} = props;
    const {x, y, direction} = coordinates;

    const CreateRows = () => {
        const grids: React.ReactNode[] = [];
        for (let column: number = 4; column > -1; column--) {
            grids.push(<TableRow key={column}>{CreateCells(column)}</TableRow>)
        }
        return grids;
    }

    const CreateCells = (columnIndex: number) => {
        const cells: React.ReactNode[] = [];
        for (let rowIndex: number = 0; rowIndex < 5; rowIndex++) {
            cells.push(<TableCell key={rowIndex} style={{border: 1, borderStyle: 'double'}} align='center'>  { y === columnIndex && x === rowIndex && <DirectionIcon direction={direction} /> }</TableCell>)
        }
        return cells;
    }

    return (
        <Table >
            <TableBody>
                {CreateRows()}
            </TableBody>
        </Table>
    );
}

export default TableComponent;