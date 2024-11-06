// create Route

export const createBlog =  async (req, res) => {
    return res.json({message:"Blog created successfully"});
}

//Read Route

export const readeBlog=async(req,res)=>{
    return res.json({message:"Blog Read successfully"})
}


// Update Route

export const updateBlog=async(req,res)=>{
    return res.json({message:"Blog update successfully"})
}


// Delete Route
export const deleteBlog=async(req,res)=>{
    return res.json({message:"Blog Delete successfully"})
}