class Utils {
    static getStandardResponse(data, meta) {
        return {
            data,
            meta
        };
    }

    static getEnv() {
        return process.env.NODE_ENV;
    }

    static isProd() {
        return process.env.NODE_ENV === 'production';
    }

    static getWeekDays() {
        return ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    }
}

export default Utils;
