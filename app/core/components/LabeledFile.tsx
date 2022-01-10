import React from "react"

export default function LabeledFile({ label, setPhoto }) {
  const uploadFile = async (e) => {
    // console.log("Uploading....")
    const files = e.target.files

    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "qy3oxqkx")
    const res = await fetch("https://api.cloudinary.com/v1_1/ganeshimaginary/image/upload", {
      method: "POST",
      body: data,
    })
    const file = await res.json()

    // console.log(file.secure_url)

    // return file.url

    // console.log(file.secure_url)

    // return file.secure_url

    setPhoto(file.secure_url)
  }

  return (
    <div>
      <label>
        {label}
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .webp"
          onChange={uploadFile}
          // disabled={isSubmitting}
          // {...register(name)}
        />
      </label>

      {/* I know its ugly but it's temporary */}
      <br />

      {/* {img && <div style={{width: "600px", height: "600px", backgroundImage: `url(${img})`}} />} */}

      {/* {img && <Image src={img} alt="Profile Picture" width="600" height="600" />} */}

      {/* {error && (
        <div role="alert" style={{ color: "red" }}>
          {error}
        </div>
      )} */}

      <style jsx>{``}</style>
    </div>
  )
}
