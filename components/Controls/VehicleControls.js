import { ControlGroup, Label, Select } from '../../styles/MainStyles';
import { ROAD_CONDITIONS, VEHICLE_TYPES } from '../../utils/constants';

export function VehicleControls({ params, onParamChange }) {
    return (
        <ControlGroup>
            <Label>Type de route</Label>
            <Select
                value={params.road_condition}
                onChange={(e) => onParamChange('road_condition', e.target.value)}
            >
                {Object.entries(ROAD_CONDITIONS).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </Select>

            <Label>Type de véhicule</Label>
            <Select
                value={params.vehicle_type}
                onChange={(e) => onParamChange('vehicle_type', e.target.value)}
            >
                {Object.entries(VEHICLE_TYPES).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                ))}
            </Select>
        </ControlGroup>
    );
}
