import {
    CombinedSliderContainer,
    CombinedSliderLabel,
    Slider
} from '../../styles/MainStyles';

export function CombinedSlider({ value, onChange }) {

    return (
        <CombinedSliderContainer>
            <CombinedSliderLabel>
                <span>Frein à main</span>
                <span>Frein</span>
                <span>Neutre</span>
                <span>Accélérateur</span>
            </CombinedSliderLabel>
            <Slider
                type="range"
                min={-200}
                max={100}
                value={value}
                onChange={(e) => onChange('controls', e.target.value)}
            />
        </CombinedSliderContainer>
    );
}
