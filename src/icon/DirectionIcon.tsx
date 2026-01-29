import NavigationIcon from '@mui/icons-material/Navigation';
import { useMemo } from 'react';
import { Directions } from '../enum';

type Props = {
    direction: Directions;
}

const DirectionIcon = (props: Props) => {
    const { direction } = props;
    const style = useMemo(() => {
        const degree = direction === 'NORTH' ? 0 : direction === 'EAST' ? 90 : direction === 'SOUTH' ? 180 : 270
        return {
            transform: `rotate(${degree}deg)`
        }  as React.CSSProperties
    }, [direction])

    return (<div style={style}>
                <NavigationIcon />
            </div>)
}

export default DirectionIcon;