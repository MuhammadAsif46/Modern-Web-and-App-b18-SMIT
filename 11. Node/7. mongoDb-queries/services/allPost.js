import { Post } from "../model/post.model.js";

const allPost = async (skip = 0, limit = 5) => {
    // return await Post.find({}).populate("author", "username email phone")
    return await Post.aggregate([
        // // {
        // //     $match: { title: "post 1 ali" }
        // // }
        {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "authorDetails"
            }
        },
        {
            $facet: {
                total: [
                    {
                        $count: "count",
                    },
                ],
                data: [
                    {
                        $addFields: {
                            _id: "$_id",
                        },
                    },
                ],
            },
        },
        {
            $unwind: "$total",
        },
        {
            $project: {
                data: {
                    $slice: [
                        "$data",
                        skip,
                        {
                            $ifNull: [limit, "$total.create"],
                        },
                    ],
                },
                meta: {
                    totalCount: "$total.count",
                    limit: {
                        $literal: limit,
                    },
                    currentPage: {
                        $literal: skip / limit + 1,
                    },
                    totalPages: {
                        $ceil: {
                            $divide: ["$total.count", limit],
                        },
                    },
                },
            },
        },
        



    ])
}

export default allPost;