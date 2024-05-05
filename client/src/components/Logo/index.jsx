import style from './style.module.scss'

export default function Logo() {
    return (
        <div className={style.all}>
            <img src="https://s3-alpha-sig.figma.com/img/fe9f/5a78/620af74ff1676949d91804882a8c5bab?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pS5GC~snUDt8LJ0~mUSAokSvquxFsxEG~hlK9BAiJ8XovERcbln38Xd1zOq-vOkHOe066z3Od1ZD-eOdiGBHXg5M9UbYX4CnFuO3BpLzRlY8mWw7eHAk2FYnVF43G3vhxZbWqxJlDq766VCWBMHC~K2FZK5~0vXBiEpyoPOjrfwXK0HOWsTXRGErCH8dkqmyYdYKFMB2GmqAbB93cywSoQ1uz9WEX4a8MmJOnGRAUz9QhKTJXGauuqP0~iCpDGcqxHtQDua9spyK0v75LVJtbm8W44T2ZfT94~PtsQog~YfoJy5rmHYWOpx5LiHaUKwbF2NcLFoEzlGd1igA16-buA__" alt="" />
            <div className={style.shadow}></div>
        </div>
    )
}
