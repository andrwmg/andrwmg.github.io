import fw2000 from './fw2000.png'
import arcadiafront from './arcadiafront2.png'
import arcadiaback from './arcadiaback.png'
import splitterfront from './splitterfront2.png'
import splitterback from './splitterback2.png'
import fw2010 from './fw2010mount.png'
import v32ldfront from './v32ldfront.png'
import v32ldback from './v32ldback.png'
import v32ldright from './v32ldright.png'
import fsiibpfront from './fsiibpfront.png'

const products = [
    {
        wide: false,
        src: [fw2000],
        company: 'Inseego Corp.',
        title: 'FW2000',
        body: '',
        bullets: [
            'Pre-release troubleshooting',
            'Part and assembly CAD',
            'Rework for antenna testing',
            'IP testing',
            'Design verification testing',
            'CREO/ProE'
        ],
        productUrl: 'https://inseego.com/products/5g-outdoor-cpe/fw2000/'
    },

    {
        wide: true,
        src: [arcadiafront, arcadiaback],
        company: 'HM Electronics, Inc.',
        title: 'Arcadia Main Station',
        body: '',
        bullets: [
            'Industrial design',
            'PCA layout',
            'Sheet metal housings',
            'Plastic front bezel',
            'Thermal analysis',
            'Modular fan panel',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/product/arcadia-station/'
    },

    {
        wide: false,
        src: [splitterfront, splitterback],
        company: 'HM Electronics, Inc.',
        title: 'FreeSpeak II Splitter',
        bullets: [
            'Industrial design',
            "PCA layout",
            'Plastic housings',
            'Material selection',
            'Part and assembly CAD',
            'IP testing',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        body: 'The FreeSpeak II Splitter (FSII-SPL) is a device that connects multiple antennas to a main station. It is  As one of my first projects at HME, I designed the FSII-SPL from concept to production. This included creating the ID, plastic housings, PCB layout, labels, assembly instructions, and performing the QA testing.',
        productUrl: 'https://www.clearcom.com/product/fsii-spl/'
    },

    {
        wide: false,
        src: [fw2010],
        company: 'Inseego Corp.',
        title: 'FW2010',
        body: '',
        bullets: [
            'Pre-release troubleshooting',
            'Rework for antenna testing',
            'Rework instructions',
            'Design Verification Testing',
            'CREO/ProE'
        ],
        productUrl: 'https://inseego.com/products/5g-outdoor-cpe/fw2010/'
    },

    {
        wide: true,
        src: [v32ldfront, v32ldback],
        company: 'HM Electronics, Inc.',
        title: 'V32LD',
        body: '',
        bullets: [
            'Industrial design',
            'Update existing product',
            'Sheet metal housings',
            'Plastic front bezels',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/product/v32ld/'
    },

    {
        wide: false,
        src: [v32ldright],
        company: 'HM Electronics, Inc.',
        title: 'V32LD_',
        body: '',
        bullets: [
            'Industrial design',
            'Update existing product',
            'Sheet metal housings',
            'Plastic front bezels',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/product/v32ld/'
    },

    {
        wide: false,
        src: [fsiibpfront],
        company: 'HM Electronics, Inc.',
        title: 'Hyperbaric Beltpack',
        body: '',
        bullets: [
            'Project manager',
            'Managed interdisciplinary team',
            'Enhanced existing product',
            'High pressure testing',
            'Part and assembly drawings',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/product/fsii-bp24-o2/'
    }
]

export default products