import { ButtonGroup, Button } from '../../styles/MainStyles';

export function StepControls({ currentStep, onPreviousStep, onNextStep }) {
    return (
        <ButtonGroup>
          <Button onClick={onPreviousStep} disabled={currentStep === 1}>
            Étape précédente
          </Button>
          <Button onClick={onNextStep}>
            Valider et passer à l'étape suivante
          </Button>
        </ButtonGroup>
    );
}
