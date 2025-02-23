// Chemin du fichier de métadonnées
export const METADATA_PATH = '/turn-based-driving-game/simulation_metadata.json';

// Tailles des différents types de données
export const TYPE_SIZES = {
    'float32': 4,
    'float64': 8,
    'int32': 4,
    'int16': 2,
    'int8': 1
};

// Types d'arrays correspondants
export const TYPE_ARRAYS = {
    'float32': Float32Array,
    'float64': Float64Array,
    'int32': Int32Array,
    'int16': Int16Array,
    'int8': Int8Array
};

// Conditions de route disponibles avec leurs labels
export const ROAD_CONDITIONS = {
    dirt: "Terre",
    snow: "Neige",
    asphalt: "Asphalte",
    wet_asphalt: "Asphalte mouillé"
};

// Types de véhicules disponibles avec leurs labels
export const VEHICLE_TYPES = {
    muscle_car: "Muscle Car",
    roadster: "Roadster",
    front_wheel_drive: "Traction avant",
    four_wheel_drive: "4 roues motrices",
    mid_engine_rear_drive: "Moteur central propulsion",
    front_engine_rear_drive: "Moteur avant propulsion"
};

// Valeurs par défaut pour les contrôles combinés
export const COMBINED_CONTROL_RANGES = {
    min: -200,
    max: 100,
    neutral: 0
};

// États des contrôles
export const CONTROL_STATES = {
    HANDBRAKE: 'handbrake',
    BRAKE: 'brake',
    NEUTRAL: 'neutral',
    THROTTLE: 'throttle'
};

// Configuration des seuils pour les contrôles
export const CONTROL_THRESHOLDS = {
    handbrake: -100,
    brake: 0,
    throttle: 0
};

// Configuration de l'API
export const API_CONFIG = {
    baseUrl: 'http://localhost:8000',
    trajectoryLength: 100
};

// Messages d'erreur
export const ERROR_MESSAGES = {
    METADATA_LOAD: 'Failed to load metadata',
    TRAJECTORY_LOAD: 'Impossible de charger la trajectoire.',
    API_FETCH: 'Failed to fetch from API'
};

// Labels des contrôles combinés
export const COMBINED_CONTROL_LABELS = {
    handbrake: 'Frein à main',
    brake: 'Frein',
    neutral: 'Neutre',
    throttle: 'Accélérateur'
};

// Configuration des paramètres de vue
export const VIEW_CONFIG = {
    defaultScale: 1,
    minScale: 0.5,
    maxScale: 2,
    scaleStep: 0.1
};

// Configuration du rendu
export const RENDER_CONFIG = {
    fps: 60,
    updateInterval: 1000 / 60
};
