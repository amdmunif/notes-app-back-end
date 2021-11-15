/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    updated_at,
    username,
}) => ({
    id,
    title,
    body,
    tags,
    createdAt: created_at,
    updatedAt: updated_at,
    username,
});

module.exports = { mapDBToModel };