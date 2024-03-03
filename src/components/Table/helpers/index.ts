export function parseDate(time: number, long?: boolean) {
    if (!time) return "";

    const fecha = new Date(time);

    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();

    if (long) {
        const horas = fecha.getHours().toString().padStart(2, "0");
        const minutos = fecha.getMinutes().toString().padStart(2, "0");
        const segundos = fecha.getSeconds().toString().padStart(2, "0");

        return `${dia}/${mes}/${año} ${horas}:${minutos}:${segundos}`;
    }

    return `${dia}/${mes}/${año}`;
}
