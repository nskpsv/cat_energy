import slimIcon from '../../resources/program/slim_cat.svg';
import gainIcon from '../../resources/program/gain_cat.svg';

export default {
    slim: {
        id: 0,
        header: 'похудение',
        description: 'Ваш кот весит больше собаки и почти утратил способность лазить по деревьям? Пора на диету! Cat Energy Slim поможет вашему питомцу сбросить лишний вес.',
        icon: slimIcon,
        link: {
            path: '/catalog',
            text: 'каталог slim',
        },
    },
    gain: {
        id: 1,
        header: 'набор массы',
        description: 'Заработать авторитет среди дворовых котов и даже собак? Серия Cat Energy Pro поможет вашему коту нарастить необходимые мышцы!',
        icon: gainIcon,
        link: {
            path: '/catalog',
            text: 'каталог pro',
        }
    },
}