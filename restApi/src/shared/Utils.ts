export default class Utils {
    static async Stall(stallTime = 3000) {
        await new Promise((resolve) => setTimeout(resolve, stallTime));
    }
}
