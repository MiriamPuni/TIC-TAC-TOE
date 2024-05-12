import { useContext } from 'react'
import style from './style.module.scss'
import { DataContext } from '../../App'

export default function AvatarImg() {
    const { user, setUser } = useContext(DataContext)
    const img1 = "https://s3-alpha-sig.figma.com/img/3ad0/5ae1/ddb42a7f2f78e7634eba900a5c0db41d?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=igjQfuBtGigIGaMsFpVj9bPNpEAKqqHjleI-Tzh8nhq4ZS047o250NKlU2kSjP6IARrl1pelqgHm1PagCNAh0o1EjVMHB5v2ATb8lDSd8rLzGn3pTUzVzJn0JOz4xVqx39tkjuilURZA4zB7rwsABBhYvGFmDjjupVAjLNIYZSxsOtGBvgEKLMmwJHXsC1ndAVpwlshVGUKxRQJemA9vPEJieBubXsW69XDEOOkSq4lcdrSDrNRkhdvAOLrqK~Ri15DM1sZVe876v6pAmiJf08h~EzImYj9Fb4LbaSDa0nP5onpvWy27NJ-DvIb5y~Dt451IPEvuC15aGgvYqEUhWw__"
    const img2 = "https://s3-alpha-sig.figma.com/img/6986/c585/8da5aa2f326d0116725399a65e784c2e?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bmDZjX9fwBK-Szu8TFzdB~cDHSk3g4GpEJkskS7Mj5NwAjqlic0Y9400sQiHqvL5wj5eq~ru06mDx81MFKgkCBGHGbh4FnROVseq7DdEHWUDLV8GlQCFtS8ef8I9Ukb-Pnjag09ykmt6EBFusjaJC6DGd4oIcGJLGJH9THY4uR6bLz6~cneB1-qodzl-Ig0SPsMfWUIQaqu9oI-5d~LkOzhwB-PFkjGDz644Z4CWvI6VxYwz0Xw2QCiDTIGGrd5UZtOx5YQe-V7NfagFMMXVdtrm8IXxGmgstkALZiPiv3eSPVKh3TSN3IKHYtOmNg6YmEBceXa-lZzzDOFYrYCyUg__"
    const onclick = (img) => {
        setUser(user=>({ ...user, img }))
    }
    console.log("userrrr", user);

    return (
        <div className={style.AvatarImg}>
            <img onClick={()=>onclick(img1)} className={style.img} src={img1} alt="" />
            <img onClick={()=>onclick(img2)} className={style.img} src={img2} alt="" />
            <img onClick={()=>onclick(img1)} className={style.img} src={img1} alt="" />
        </div>
    )
}

